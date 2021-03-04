import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tile-app';
  public TopLeftTile: SingleTile = new SingleTile
  public ArraysOfArrays;
  public imageURL: string;
  public BackgroundImage: string = 'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/45000274_10155623833461922_164377830166102016_n.jpg?_nc_cat=101&_nc_ht=scontent.fewr1-3.fna&oh=71d050dcae5acedac55c8902d14960ad&oe=5CAE8F94'
  public shuffleOrder: SingleTile[] = [];
  private BlankTile: SingleTile = this.TopLeftTile

  ngOnInit(): void {
    this.CreateTiles();
    this.getArrayOfArrays()
  }

  Shuffle(numberOfMovesToShuffle: number) {
if (!numberOfMovesToShuffle){numberOfMovesToShuffle=100}
  for (let i = 0; i < numberOfMovesToShuffle; i++) {
    let allDriections:string[] = Object.keys(this.BlankTile.Links) 
    let selectedDirection:string=allDriections[this.getRandomDirection()];
    while(!this.BlankTile.Links[selectedDirection]){
       selectedDirection=allDriections[this.getRandomDirection()];
    }
    this.TileClick(this.BlankTile.Links[selectedDirection])
    }
  }

  getRandomDirection(){return Math.floor(Math.random() * 5)}

  SolvePuzzle() {
    // this is kinda cheating, but its the simple way  to solve the puzzle,
    // we will just play it backwards.
    while (this.shuffleOrder.length>0) {
      this.TileClick(this.shuffleOrder.pop(),false);
    }
  }

  TileClick(tile: SingleTile,log:boolean=true) {
    let swpWith: SingleTile;
    //checks to see if we can swap and finds the approprate tile to swap
    if (tile.Links.Bottom && tile.Links.Bottom.isEmpty) { swpWith = tile.Links.Bottom; }
    if (tile.Links.Top && tile.Links.Top.isEmpty) { swpWith = tile.Links.Top }
    if (tile.Links.Left && tile.Links.Left.isEmpty) { swpWith = tile.Links.Left }
    if (tile.Links.Right && tile.Links.Right.isEmpty) { swpWith = tile.Links.Right }

    //next we swap the info in the tiles... 
    // yes technically its cheating, but i wont tell =D
    if (swpWith) {
      let tmpID: number = swpWith.ID
      let tmpImg: ImagePart = swpWith.Img
      let tmpisEmpty: boolean = swpWith.isEmpty

      swpWith.isEmpty = tile.isEmpty
      swpWith.Img = tile.Img
      swpWith.ID = tile.ID

      tile.ID = tmpID
      tile.Img = tmpImg
      tile.isEmpty = tmpisEmpty

      this.BlankTile = tile
     if (log){this.shuffleOrder.push(swpWith)}
      this.getArrayOfArrays() // update the display....
    }

  }


  getArrayOfArrays() {
    let rtn = [];
    let rw: SingleTile = this.TopLeftTile
    while (rw) {
      rtn.push([rw])
      rw.Img['background-image'] = 'url("' + this.BackgroundImage + '")'
      rw = rw.Links.Right
    }

    rtn.forEach(itm => {
      let downWard = itm[0].Links.Bottom
      while (downWard) {
        itm.push(downWard)
        downWard.Img['background-image'] = 'url("' + this.BackgroundImage + '")'

        downWard = downWard.Links.Bottom
      }
    })
    window['DN'] = rtn
    this.ArraysOfArrays = undefined
    this.ArraysOfArrays = rtn
  }


  counter() { let a = 0; return () => { a = a + 1; return a } }

  CreateTiles() {
    this.TopLeftTile.isEmpty = true
    this.GenerateTiles(4, 4, this.TopLeftTile)
    window['TopLeft'] = this.TopLeftTile
  }

  jumpDownXTiles(distance: number, startTile: SingleTile) {
    let rtn: SingleTile = startTile
    for (let j = 0; j < distance; j++) {
      if (distance > 0) {
        rtn = rtn.Links.Bottom || rtn
      }
    }
    return rtn
  }

  GenerateTiles(width: number, length: number, TopLeftTile: SingleTile) {
    let cnt = this.counter();

    //first we will link all the tiles across the top.
    //next we will link all the tiles across the bottom.
    let currentTile: SingleTile = TopLeftTile

    for (let w: number = 1; w < width; w++) {
      let newTile: SingleTile = new SingleTile
      newTile.ID = cnt();
      newTile.Img.left = (-50 * (w)).toString() + 'px'
      newTile.Img.top = '0px'
      newTile.Img['background-image'] = 'url("' + this.BackgroundImage + '")'
      newTile.Links.Left = currentTile
      currentTile.Links.Right = newTile
      currentTile = newTile
    }

    //now to link all the tiles across the bottom
    let InitalcurrentTile: SingleTile = TopLeftTile
    currentTile = InitalcurrentTile
    for (let w: number = 0; w < width; w++) {
      for (let l: number = 0; l < length - 1; l++) {
        let newTile: SingleTile = new SingleTile
        newTile.ID = cnt();
        newTile.Img.left = (-50 * (w)).toString() + 'px'
        newTile.Img.top = (-50 * (l + 1)).toString() + 'px'
        newTile.Img['background-image'] = 'url("' + this.BackgroundImage + '")'

        newTile.Links.Top = currentTile
        currentTile.Links.Bottom = newTile

        //since we now have a function to jump in the list we can now link across from here
        //we only need if the inital link has a left
        if (InitalcurrentTile.Links.Left) {
          let crossLinkTile: SingleTile = this.jumpDownXTiles(l + 1, InitalcurrentTile.Links.Left)
          newTile.Links.Right = crossLinkTile
          crossLinkTile.Links.Left = newTile
        }
        currentTile = newTile
      }
      currentTile = InitalcurrentTile.Links.Right
      InitalcurrentTile = InitalcurrentTile.Links.Right
    }
  }

}

export class SingleTile {
  public Img: ImagePart = new ImagePart
  public Links: Link = new Link
  public ID: any
  public isEmpty: boolean = false
}

class ImagePart {
  [key: string]: string;
  // public top: string
  // public left: string
}

class Link {
  public Top: SingleTile = undefined
  public Right: SingleTile = undefined
  public Bottom: SingleTile = undefined
  public Left: SingleTile = undefined
}