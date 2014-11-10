this.NesDb = this.NesDb || {};

NesDb[ '274ACA5B5276D36ABBB0AB3BFA5BE0EB87689A55' ] = {
	"$": {
		"name": "Juuryoku Soukou Metal Storm",
		"altname": "重力装甲メタルストーム",
		"class": "Licensed",
		"catalog": "TIX-4M (IF-21)",
		"publisher": "Irem",
		"developer": "Tamtex",
		"region": "Japan",
		"players": "1",
		"date": "1992-04-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FDB8AA9A",
				"sha1": "274ACA5B5276D36ABBB0AB3BFA5BE0EB87689A55",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TIX-4M-0 PRG",
								"size": "128k",
								"crc": "BD8A0D7D",
								"sha1": "A073D1156EEEAB3FB4F3B637F32CB6AB3909DD61"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TIX-4M-0 CHR",
								"size": "256k",
								"crc": "84729F89",
								"sha1": "7A558095F6CB14022529C1FDBA00E31FBC0DC38A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
