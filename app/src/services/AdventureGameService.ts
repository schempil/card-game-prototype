export default class AdventureGameService {

	malePlayers = 0
	femalePlayers = 0
	bottleSize = 0.0

	hitPoints = {}

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

		const playerCount = this.malePlayers + this.femalePlayers

		let zb_geg0 = Math.ceil(0.5 * playerCount);
		let hp_geg0 = Math.ceil(this.bottleSize * 0.75 * playerCount);

		let zb1_geg1_j = Math.ceil(0.15 * this.malePlayers);
		let zb1_geg1_m = Math.ceil(0.15 * this.femalePlayers);
		let zb2_geg1   = Math.ceil(0.1 * playerCount);

		let hp_geg1_m = Math.ceil (this.bottleSize*(0.25 * playerCount)*2 + Math.ceil(0.1*playerCount) + Math.max(2,2*Math.ceil(0.15*this.femalePlayers)));
		let hp_geg1_j = Math.ceil (this.bottleSize*(0.25 * playerCount)*2 + Math.ceil(0.1*playerCount) + Math.max(2,2*Math.ceil(0.15*this.malePlayers)));

		let zb1_geg21 = Math.ceil(0.1 * playerCount);
		let zb2_geg21 = Math.ceil(0.05 * playerCount);
		let hp_geg21 = Math.ceil(this.bottleSize*(3*Math.ceil(0.3*playerCount - Math.ceil(0.1 * playerCount) - Math.ceil(0.05 * playerCount)) + Math.ceil(0.1 * playerCount)*4 + Math.ceil(0.05 * playerCount)*5));

		let zb1_geg22 = Math.ceil(0.3 * playerCount);
		let zb2_geg22 = Math.floor(0.5 * playerCount);
		let hp_geg22 = Math.ceil(this.bottleSize*0.5 * playerCount);

		let zb1_geg23 = Math.max(4, Math.ceil(0.3 * playerCount));
		let zb2_geg23 = Math.ceil(0.03 * playerCount);
		let hp_geg23 = Math.ceil(this.bottleSize*(9*Math.ceil(0.03 * playerCount)+ (zb1_geg23 - 4*Math.ceil(0.03 * playerCount))*(this.malePlayers/playerCount*3 + this.femalePlayers/playerCount*1.5)*0.5));

		let hp_geg3 = Math.ceil(this.bottleSize*(this.femalePlayers*2/5*2 + this.malePlayers*2/5*3.5));

		let zb1_geg4 = Math.ceil(0.8 * playerCount);
		let zb2_geg4 = Math.ceil(0.04 * playerCount);
		let hp_geg4 = Math.ceil(this.bottleSize*0.9*(3*this.femalePlayers+5*this.malePlayers));

		let txt_zb_geg0	= ["� Mindestens " + zb_geg0 + " mit Level " + Math.floor(2 * this.bottleSize), "� At least " + zb_geg0 + " with level " + Math.floor(2 * this.bottleSize)]

		let txt_zb1_geg1_1 = ["� Mindestens " + zb1_geg1_m + " Feen", "� At least " + zb1_geg1_m + " fairies"]
		let txt_zb1_geg1_2 = ["� Mindestens " + zb1_geg1_j + " Riesen", "� At least " + zb1_geg1_j + " giants"]
		let txt_zb1_geg1_3 = ["� Mindestens " + zb1_geg1_m + " Amazonen", "� At least " + zb1_geg1_m + " amazons"]
		let txt_zb1_geg1_4 = ["� Mindestens " + zb1_geg1_j + " Zwerge", "� At least " + zb1_geg1_j + " dwarfs"]

		let txt_zb2_geg1	= ["� Mindestens " + zb2_geg1 + " mit Level " + Math.floor(3 * this.bottleSize), "� At least " + zb2_geg1 + " with level " + Math.floor(3 * this.bottleSize)]

		let txt_zb3_geg1_1	= ["� Feen bringen +2 Hitpoints", "� Fairies contribute +2 hitpoints"]
		let txt_zb3_geg1_2	= ["� Riesen bringen +2 Hitpoints", "� Giants contribute +2 hitpoints"]
		let txt_zb3_geg1_3	= ["� Amazonen bringen +2 Hitpoints", "� Amazons contribute +2 hitpoints"]
		let txt_zb3_geg1_4	= ["� Zwerge bringen +2 Hitpoints", "� Dwarfs contribute +2 hitpoints"]

		let txt_zb1_geg2_1	= ["� Mindestens " + zb1_geg21 + " mit Level " + Math.floor(4 * this.bottleSize), "� At least " + zb1_geg21 + " with level " + Math.floor(4 * this.bottleSize)]
		let txt_zb2_geg2_1	= ["� Mindestens " + zb2_geg21 + " mit Level " + Math.floor(5 * this.bottleSize), "� At least " + zb2_geg21 + " with level " + Math.floor(5 * this.bottleSize)]

		let txt_zb1_geg2_2	= ["� Mindestens " + zb1_geg22 + " Mitspieler", "� At least " + zb1_geg22 + " players"]
		let txt_zb2a_geg2_2	= ['� Die ' + zb2_geg22 + " mit den h�chsten Leveln", "� The " + zb2_geg22 + " players with the highest"]
		let txt_zb2b_geg2_2	= [" d�rfen nicht mitspielen", " levels are forbidden to fight"]

		let txt_zb1_geg2_3	= ["� Genau " + zb1_geg23 + " Mitspieler", "� Exact " + zb1_geg23 + " players"]
		let txt_zb2_geg2_3	= ["� Alle Rassen mindestens " + zb2_geg23 + " Mal vertreten", "� At least " + zb1_geg21 + " fighters of every race"]

		let txt_zb1_geg3_1	= ["� Nur Amazonen und Zwerge erlaubt" , "� Only amazons and dwarfs allowed"]
		let txt_zb1_geg3_2	= ["� Nur Feen und Riesen erlaubt" , "� Only fairies and giants allowed"]

		let txt_zb2_geg3	= ["� " + this.orcNames[5] + " besiegt", "� " + this.orcNames[5] + " defeated"]

		let txt_zb1_geg4	= ["� Alle anderen Gegner sind besiegt", "� All other enemies are defeated"]
		let txt_zb2_geg4	= ["� Mindestens " + zb1_geg4 + " Mitspieler", "� At least " + zb1_geg4 + " players"]
		let txt_zb3_geg4	= ["� Mindestens " + zb2_geg4 + " mit Level " + Math.floor(7 * this.bottleSize), "� At least " + zb2_geg4 + " with level " + Math.floor(7 * this.bottleSize)]
	}

	shuffle(a: any[]) : any[] {
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