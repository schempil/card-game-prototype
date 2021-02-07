export default class AdventureGameService {

	malePlayers = 0
	femalePlayers = 0
	bottleSize = 0.0

	gameData: any = {}

	orcNames = this.shuffle(["Urgr", "Schesch", "Orl", "Zorzat", "Iggy", "Zerzorg", "Ernarg",
		"Ozhe", "Zecho", "Azkrer", "Ezurg", "Zegl", "Gnach", "Sozz",
		"Amm", "Avukh", "Ochos", "Amm", "Unek", "Nurgh", "Ukrugg",
		"Grakul", "Ogh", "Mukh", "Amorg", "Kach", "Rugar"])

	constructor(malePlayers: number, femalePlayers: number, bottleSize: number) {
		this.malePlayers = malePlayers
		this.femalePlayers = femalePlayers
		this.bottleSize = 2.25 - (0.25 * bottleSize)
	}

	calculateGame() {

		this.gameData.playerCount = this.malePlayers + this.femalePlayers

		this.gameData.zbGeg0 = Math.ceil(0.5 * this.gameData.playerCount);
		this.gameData.hpGeg0 = Math.ceil(this.bottleSize * 0.75 * this.gameData.playerCount);

		this.gameData.zb1Geg1J = Math.ceil(0.15 * this.malePlayers);
		this.gameData.zb1Geg2M = Math.ceil(0.15 * this.femalePlayers);
		this.gameData.zb2Geg1   = Math.ceil(0.1 * this.gameData.playerCount);

		this.gameData.hpGeg1M = Math.ceil (this.bottleSize*(0.25 * this.gameData.playerCount)*2 + Math.ceil(0.1*this.gameData.playerCount) + Math.max(2,2*Math.ceil(0.15*this.femalePlayers)));
		this.gameData.hpGeg1J = Math.ceil (this.bottleSize*(0.25 * this.gameData.playerCount)*2 + Math.ceil(0.1*this.gameData.playerCount) + Math.max(2,2*Math.ceil(0.15*this.malePlayers)));

		this.gameData.zb1Geg21 = Math.ceil(0.1 * this.gameData.playerCount);
		this.gameData.zb2Geg21 = Math.ceil(0.05 * this.gameData.playerCount);
		this.gameData.hpGeg21 = Math.ceil(this.bottleSize*(3*Math.ceil(0.3*this.gameData.playerCount - Math.ceil(0.1 * this.gameData.playerCount) - Math.ceil(0.05 * this.gameData.playerCount)) + Math.ceil(0.1 * this.gameData.playerCount)*4 + Math.ceil(0.05 * this.gameData.playerCount)*5));

		this.gameData.zb1Geg22 = Math.ceil(0.3 * this.gameData.playerCount);
		this.gameData.zb2Geg22 = Math.floor(0.5 * this.gameData.playerCount);
		this.gameData.hpGeg22 = Math.ceil(this.bottleSize*0.5 * this.gameData.playerCount);

		this.gameData.zb1Geg23 = Math.max(4, Math.ceil(0.3 * this.gameData.playerCount));
		this.gameData.zb2Geg23 = Math.ceil(0.03 * this.gameData.playerCount);
		this.gameData.hpGeg23 = Math.ceil(this.bottleSize*(9*Math.ceil(0.03 * this.gameData.playerCount)+ (this.gameData.zb1Geg23 - 4*Math.ceil(0.03 * this.gameData.playerCount))*(this.malePlayers/this.gameData.playerCount*3 + this.femalePlayers/this.gameData.playerCount*1.5)*0.5));

		this.gameData.hpGeg3 = Math.ceil(this.bottleSize*(this.femalePlayers*2/5*2 + this.malePlayers*2/5*3.5));

		this.gameData.zb1Geg4 = Math.ceil(0.8 * this.gameData.playerCount);
		this.gameData.zb2Geg4 = Math.ceil(0.04 * this.gameData.playerCount);
		this.gameData.hpGeg4 = Math.ceil(this.bottleSize*0.9*(3*this.femalePlayers+5*this.malePlayers));

		this.gameData.txtZbGeg0	= "At least " + this.gameData.zbGeg0 + " with level " + Math.floor(2 * this.bottleSize)

		this.gameData.txtZb1Geg1Dot1 = "At least " + this.gameData.zb1Geg2M + " fairies"
		this.gameData.txtZb1Geg1Dot2 = "At least " + this.gameData.zb1Geg1J + " giants"
		this.gameData.txtZb1Geg1Dot3 = "At least " + this.gameData.zb1Geg2M + " amazons"
		this.gameData.txtZb1Geg1Dot4 = "At least " + this.gameData.zb1Geg1J + " dwarfs"

		this.gameData.txtZb2Geg1	= "At least " + this.gameData.zb2Geg1 + " with level " + Math.floor(3 * this.bottleSize)

		this.gameData.txtZb3Geg1Dot1	= "Fairies contribute +2 hitpoints"
		this.gameData.txtZb3Geg1Dot2	= "Giants contribute +2 hitpoints"
		this.gameData.txtZb3Geg1Dot3	= "Amazons contribute +2 hitpoints"
		this.gameData.txtZb3Geg1Dot4	= "Dwarfs contribute +2 hitpoints"

		this.gameData.txtZb1Geg2Dot1	= "At least " + this.gameData.zb1Geg21 + " with level " + Math.floor(4 * this.bottleSize)
		this.gameData.txtZb2Geg2Dot1	= "At least " + this.gameData.zb2Geg21 + " with level " + Math.floor(5 * this.bottleSize)

		this.gameData.txtZb1Geg2Dot2	= "At least " + this.gameData.zb1Geg22 + " players"
		this.gameData.txtZb2aGeg2Dot2	= "The " + this.gameData.zb2Geg22 + " players with the highest"
		this.gameData.txtZb2bGeg2Dot2	= " levels are forbidden to fight"

		this.gameData.txtZb1Geg2Dot3	= "Exact " + this.gameData.zb1Geg23 + " players"
		this.gameData.txtZb2Geg2Dot3	= "At least " + this.gameData.zb1Geg21 + " fighters of every race"

		this.gameData.txtZb1Geg3Dot1	= "Only amazons and dwarfs allowed"
		this.gameData.txtZb1Geg3Dot2	= "Only fairies and giants allowed"

		this.gameData.txtZb2Geg3	= this.orcNames[5] + " defeated"

		this.gameData.txtZb1Geg4	= "All other enemies are defeated"
		this.gameData.txtZb2Geg4	= "At least " + this.gameData.zb1Geg4 + " players"
		this.gameData.txtZb3Geg4	= "At least " + this.gameData.zb2Geg4 + " with level " + Math.floor(7 * this.bottleSize)

		return this.gameData
	}

	shuffle(a: any[]): any[] {
		let j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}

		return a;
	}

}