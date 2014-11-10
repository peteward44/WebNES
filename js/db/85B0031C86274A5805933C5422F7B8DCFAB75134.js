this.NesDb = this.NesDb || {};

NesDb[ '85B0031C86274A5805933C5422F7B8DCFAB75134' ] = {
	"$": {
		"name": "Block Set",
		"altname": "ブロックセット",
		"class": "Licensed",
		"catalog": "HVC-BL",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1985-07-26"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "rob",
						"name": "R. O. B."
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DF67DAA1",
				"sha1": "85B0031C86274A5805933C5422F7B8DCFAB75134",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "HVC-NROM-256K-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-BL-0 PRG",
								"size": "32k",
								"crc": "4EE735C1",
								"sha1": "36B6B30F451C3B4A48464BEE9A144C873AE04CC7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-BL-0 CHR",
								"size": "8k",
								"crc": "41F4B527",
								"sha1": "49F8DABDA7E8585E6961049C46ED913518CD959E"
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
