export default class AdventureGameService {

	malePlayers = 0
	femalePlayers = 0
	bottleSize = 0.0

	gameData: any = {}

	orcNames = this.shuffle(["Urgr", "Schesch", "Orl", "Zorzat", "Iggy", "Zerzorg", "Ernarg",
		"Ozhe", "Zecho", "Azkrer", "Ezurg", "Zegl", "Gnach", "Sozz",
		"Amm", "Avukh", "Ochos", "Amm", "Unek", "Nurgh", "Ukrugg",
		"Grakul", "Ogh", "Mukh", "Amorg", "Kach", "Rugar"])

	nameAddons = this.shuffle([	" the tremendous", " the evil", " the cruel", " the hateful", " the dumb",
		" the wrathful", " the  merciless", " the brutal", " the bestial", " the vigorous",
		" the powerful", " the cranky", " the dispiteous", " the diabolic", " the demonical",
		" the ruthless", " the widow maker", " the frenzied",  " the insane", " the lunatic",
		" the maniacal", " the avaricious", " the voracious", " the barbarous"])

	constructor(malePlayers: number, femalePlayers: number, bottleSize: number) {

		this.malePlayers = malePlayers
		this.femalePlayers = femalePlayers
		this.bottleSize = 2.25 - (0.25 * bottleSize)

		console.log('### calculated bottleSize', this.bottleSize)

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

		console.log('### Math.floor(0.5 * this.gameData.playerCount)', this.gameData.playerCount, Math.floor(0.5 * this.gameData.playerCount))

		this.gameData.zb2Geg22 = Math.floor(0.5 * this.gameData.playerCount);
		this.gameData.hpGeg22 = Math.ceil(this.bottleSize*0.5 * this.gameData.playerCount);

		this.gameData.zb1Geg23 = Math.max(4, Math.ceil(0.3 * this.gameData.playerCount));
		this.gameData.zb2Geg23 = Math.ceil(0.03 * this.gameData.playerCount);
		this.gameData.hpGeg23 = Math.ceil(this.bottleSize*(9*Math.ceil(0.03 * this.gameData.playerCount)+ (this.gameData.zb1Geg23 - 4*Math.ceil(0.03 * this.gameData.playerCount))*(this.malePlayers/this.gameData.playerCount*3 + this.femalePlayers/this.gameData.playerCount*1.5)*0.5));

		this.gameData.hpGeg3 = Math.ceil(this.bottleSize*(this.femalePlayers*2/5*2 + this.malePlayers*2/5*3.5));

		this.gameData.zb1Geg4 = Math.ceil(0.8 * this.gameData.playerCount);
		this.gameData.zb2Geg4 = Math.ceil(0.04 * this.gameData.playerCount);
		this.gameData.hpGeg4 = Math.ceil(this.bottleSize*0.9*(3*this.femalePlayers+5*this.malePlayers));

		this.gameData.txtZbGeg0	= ["� Mindestens " + this.gameData.zbGeg0 + " mit Level " + Math.floor(2 * this.bottleSize), "� At least " + this.gameData.zbGeg0 + " with level " + Math.floor(2 * this.bottleSize)]

		this.gameData.txtZb1Geg1Dot1 = ["� Mindestens " + this.gameData.zb1Geg2M + " Feen", "� At least " + this.gameData.zb1Geg2M + " fairies"]
		this.gameData.txtZb1Geg1Dot2 = ["� Mindestens " + this.gameData.zb1Geg1J + " Riesen", "� At least " + this.gameData.zb1Geg1J + " giants"]
		this.gameData.txtZb1Geg1Dot3 = ["� Mindestens " + this.gameData.zb1Geg2M + " Amazonen", "� At least " + this.gameData.zb1Geg2M + " amazons"]
		this.gameData.txtZb1Geg1Dot4 = ["� Mindestens " + this.gameData.zb1Geg1J + " Zwerge", "� At least " + this.gameData.zb1Geg1J + " dwarfs"]

		this.gameData.txtZb2Geg1	= ["� Mindestens " + this.gameData.zb2Geg1 + " mit Level " + Math.floor(3 * this.bottleSize), "� At least " + this.gameData.zb2Geg1 + " with level " + Math.floor(3 * this.bottleSize)]

		this.gameData.txtZb3Geg1Dot1	= ["� Feen bringen +2 Hitpoints", "� Fairies contribute +2 hitpoints"]
		this.gameData.txtZb3Geg1Dot2	= ["� Riesen bringen +2 Hitpoints", "� Giants contribute +2 hitpoints"]
		this.gameData.txtZb3Geg1Dot3	= ["� Amazonen bringen +2 Hitpoints", "� Amazons contribute +2 hitpoints"]
		this.gameData.txtZb3Geg1Dot4	= ["� Zwerge bringen +2 Hitpoints", "� Dwarfs contribute +2 hitpoints"]

		this.gameData.txtZb1Geg2Dot1	= ["� Mindestens " + this.gameData.zb1Geg21 + " mit Level " + Math.floor(4 * this.bottleSize), "� At least " + this.gameData.zb1Geg21 + " with level " + Math.floor(4 * this.bottleSize)]
		this.gameData.txtZb2Geg2Dot1	= ["� Mindestens " + this.gameData.zb2Geg21 + " mit Level " + Math.floor(5 * this.bottleSize), "� At least " + this.gameData.zb2Geg21 + " with level " + Math.floor(5 * this.bottleSize)]

		this.gameData.txtZb1Geg2Dot2	= ["� Mindestens " + this.gameData.zb1Geg22 + " Mitspieler", "� At least " + this.gameData.zb1Geg22 + " players"]

		console.log('### this.gameData.zb2Geg22', this.gameData.zb2Geg22)

		this.gameData.txtZb2aGeg2Dot2	= ['� Die ' + this.gameData.zb2Geg22 + " mit den h�chsten Leveln", "� The " + this.gameData.zb2Geg22 + " players with the highest"]
		this.gameData.txtZb2bGeg2Dot2	= [" d�rfen nicht mitspielen", " levels are forbidden to fight"]

		this.gameData.txtZb1Geg2Dot3	= ["� Genau " + this.gameData.zb1Geg23 + " Mitspieler", "� Exact " + this.gameData.zb1Geg23 + " players"]
		this.gameData.txtZb2Geg2Dot3	= ["� Alle Rassen mindestens " + this.gameData.zb2Geg23 + " Mal vertreten", "� At least " + this.gameData.zb1Geg21 + " fighters of every race"]

		this.gameData.txtZb1Geg3Dot1	= ["� Nur Amazonen und Zwerge erlaubt" , "� Only amazons and dwarfs allowed"]
		this.gameData.txtZb1Geg3Dot2	= ["� Nur Feen und Riesen erlaubt" , "� Only fairies and giants allowed"]

		this.gameData.txtZb2Geg3	= ["� " + this.orcNames[5] + " besiegt", "� " + this.orcNames[5] + " defeated"]

		this.gameData.txtZb1Geg4	= ["� Alle anderen Gegner sind besiegt", "� All other enemies are defeated"]
		this.gameData.txtZb2Geg4	= ["� Mindestens " + this.gameData.zb1Geg4 + " Mitspieler", "� At least " + this.gameData.zb1Geg4 + " players"]
		this.gameData.txtZb3Geg4	= ["� Mindestens " + this.gameData.zb2Geg4 + " mit Level " + Math.floor(7 * this.bottleSize), "� At least " + this.gameData.zb2Geg4 + " with level " + Math.floor(7 * this.bottleSize)]

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