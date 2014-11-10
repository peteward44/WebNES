this.NesDb = this.NesDb || {};

NesDb[ 'CC781A17F800614B9D5E5C1661FDCD32CEA7A7B8' ] = {
	"$": {
		"name": "Hanjuku Hero",
		"altname": "半熟英雄",
		"class": "Licensed",
		"catalog": "SQF-HJ",
		"publisher": "Square",
		"developer": "Bits Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CD7A2FD7",
				"sha1": "CC781A17F800614B9D5E5C1661FDCD32CEA7A7B8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-07",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-HJ-0 PRG",
								"size": "128k",
								"crc": "CD7A2FD7",
								"sha1": "CC781A17F800614B9D5E5C1661FDCD32CEA7A7B8"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
