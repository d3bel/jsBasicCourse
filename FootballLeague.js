function footballLeague(input){
    let index = 0;
    const stadiumCapacity = Number(input[index++]);
    const fansQuantity = Number(input[index++]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

        for (let i = 0; i < fansQuantity; i++) {
            let currentSector = input[index++];
            switch(currentSector){
                case "A": sectorA++; break;
                case "B": sectorB++; break;
                case "V": sectorV++; break;
                case "G": sectorG++; break;
            }
        }
    let totalAtendancePercent = (fansQuantity / stadiumCapacity * 100).toFixed(2)
    let percentSectorA = (sectorA / fansQuantity * 100).toFixed(2);
    let percentSectorB = (sectorB / fansQuantity * 100).toFixed(2);
    let percentSectorV = (sectorV / fansQuantity * 100).toFixed(2);
    let percentSectorG = (sectorG / fansQuantity * 100).toFixed(2);
    console.log(`${percentSectorA}%\n${percentSectorB}%\n${percentSectorV}%\n${percentSectorG}%\n${totalAtendancePercent}%`);
}
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"])
// 93
// 16
// A
// V
// G
// G
// B
// B
// G
// B
// A
// B
// B
// B
// A
// B
// B
// A
