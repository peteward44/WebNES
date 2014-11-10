this.NesDb = this.NesDb || {};

NesDb[ '619C8C45C14BB26FEE93D0F8646127F30E336128' ] = {
	"$": {
		"name": "1943: The Battle of Valhalla",
		"class": "Licensed",
		"catalog": "CAP-43",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1988-06-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4E42F13A",
				"sha1": "619C8C45C14BB26FEE93D0F8646127F30E336128",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-05",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-43-0 PRG",
								"size": "128k",
								"crc": "4E42F13A",
								"sha1": "619C8C45C14BB26FEE93D0F8646127F30E336128"
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
