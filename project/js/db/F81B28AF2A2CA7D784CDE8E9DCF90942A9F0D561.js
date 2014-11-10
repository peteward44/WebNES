this.NesDb = this.NesDb || {};

NesDb[ 'F81B28AF2A2CA7D784CDE8E9DCF90942A9F0D561' ] = {
	"$": {
		"name": "Gyro",
		"altname": "ジャイロ",
		"class": "Licensed",
		"catalog": "HVC-GY",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1985-08-13"
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
				"crc": "023A5A32",
				"sha1": "F81B28AF2A2CA7D784CDE8E9DCF90942A9F0D561",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "3I",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "21B099F3",
								"sha1": "76103ABE07C1CCA6FC4107E35847F4E959F5E5BB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "D0135A78",
								"sha1": "F69B0EE2DC7DFD701253F3F64F114B3F279AAFC5"
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
