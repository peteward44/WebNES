this.NesDb = this.NesDb || {};

NesDb[ 'E17A4458A5C94C5A019A2B60FC27EDE742DE51B3' ] = {
	"$": {
		"name": "Indy: Indiana Jones et la Derniere Croisade",
		"altname": "Indiana Jones and The Last Crusade",
		"class": "Licensed",
		"catalog": "NES-LR-FRA",
		"publisher": "UBI Soft",
		"developer": "Tiertex",
		"portdeveloper": "NMS Software",
		"region": "France",
		"players": "1",
		"date": "1993-11-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8D9AD3BF",
				"sha1": "E17A4458A5C94C5A019A2B60FC27EDE742DE51B3",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-LR-0 PRG",
								"size": "128k",
								"crc": "8D9AD3BF",
								"sha1": "E17A4458A5C94C5A019A2B60FC27EDE742DE51B3"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
