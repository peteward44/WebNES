this.NesDb = this.NesDb || {};

NesDb[ '3F097632E2387FBC26D2F808438EA544CEBE3D95' ] = {
	"$": {
		"name": "Prince of Persia",
		"class": "Licensed",
		"catalog": "NES-PA-ESP",
		"publisher": "Mindscape",
		"developer": "Motivetime",
		"region": "Spain",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4B1ED62E",
				"sha1": "3F097632E2387FBC26D2F808438EA544CEBE3D95",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2008-03-25"
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
								"name": "ESP-PA-0 PRG",
								"size": "128k",
								"crc": "4B1ED62E",
								"sha1": "3F097632E2387FBC26D2F808438EA544CEBE3D95"
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
