function housePainting(input){
      //  1.	x – височината на къщата – реално число в интервала [2...100]
      let hightOfHouse = Number(input[0]);
  //  2.	y – дължината на страничната стена – реално число в интервала [2...100]
        let lenghtOfSideWalls = Number(input[1]);
  //   3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]
        let triangleRoofHight = Number(input[2]);
            let greenPaintCoveragePerLiter = 3.4;
           let redPaintCoveragePerLiter = 4.3;
            let frontDoor = 1.2 * 2;
           let sideWindow = 1.5 * 1.5;
           let frontAndBackWalls = ((hightOfHouse * hightOfHouse) - frontDoor) + (hightOfHouse * hightOfHouse);
            let sideWalls = (hightOfHouse * lenghtOfSideWalls) * 2;
            let totalWallsArea = frontAndBackWalls + (sideWalls - (sideWindow * 2));
                let greenPaintNeeded = totalWallsArea / greenPaintCoveragePerLiter;
                console.log(greenPaintNeeded.toFixed(2))
        let roofRectangleArea = (hightOfHouse * lenghtOfSideWalls) * 2;
        let roofTriangleArea = 2 * (hightOfHouse * triangleRoofHight / 2);
        let totalRoofArea = roofRectangleArea + roofTriangleArea;
            let redPaintNeeded = totalRoofArea / redPaintCoveragePerLiter;
            console.log(redPaintNeeded.toFixed(2))
}
housePainting(["10.25", "15.45", "8.88"])