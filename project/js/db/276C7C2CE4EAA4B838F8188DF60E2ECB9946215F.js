this.NesDb = this.NesDb || {};

NesDb[ '276C7C2CE4EAA4B838F8188DF60E2ECB9946215F' ] = {
	"$": {
		"name": "Gremlins 2: Shinshu Tanjou",
		"altname": "グレムリン２ 新種誕生",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-GRM-6500",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0897021B",
				"sha1": "276C7C2CE4EAA4B838F8188DF60E2ECB9946215F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-26"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-FME-7",
						"pcb": "GRM-E301",
						"mapper": "69"
					},
					"prg": [
						{
							"$": {
								"name": "GRM-PRG",
								"size": "128k",
								"crc": "11FC8686",
								"sha1": "C536B2D21653E48A9DCBC802519E619E3BE93816"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "GRM-CHR",
								"size": "256k",
								"crc": "A13B9D3A",
								"sha1": "670EB3B494E978C68F1629472FF02CA02989A5E9"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "SUNSOFT-5B"
							}
						}
					]
				}
			]
		}
	]
};
