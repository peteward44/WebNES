this.NesDb = this.NesDb || {};

NesDb[ 'B0A69803C8CEEBABC09BA546227EECF1916F92ED' ] = {
	"$": {
		"name": "Dash Yarou",
		"altname": "ダッシュ野郎",
		"class": "Licensed",
		"catalog": "VIS-5D",
		"publisher": "Visco",
		"developer": "Toaplan",
		"region": "Japan",
		"players": "1",
		"date": "1990-06-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1ED48C5C",
				"sha1": "B0A69803C8CEEBABC09BA546227EECF1916F92ED",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "VIS-5D-0 PRG",
								"size": "128k",
								"crc": "1ED48C5C",
								"sha1": "B0A69803C8CEEBABC09BA546227EECF1916F92ED"
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
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
