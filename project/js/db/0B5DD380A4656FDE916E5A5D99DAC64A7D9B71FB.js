this.NesDb = this.NesDb || {};

NesDb[ '0B5DD380A4656FDE916E5A5D99DAC64A7D9B71FB' ] = {
	"$": {
		"name": "Famista '94",
		"altname": "ファミスタ’９４",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-F94-3900",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "2",
		"date": "1993-12-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "429103C9",
				"sha1": "0B5DD380A4656FDE916E5A5D99DAC64A7D9B71FB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-340",
						"pcb": "CS 0001",
						"mapper": "19"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTF94P",
								"size": "128k",
								"crc": "3940B0F9",
								"sha1": "DAD035531EEA666DB0BF3991FDEAA7795E9C3B56"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTF94C",
								"size": "128k",
								"crc": "1FFA7E50",
								"sha1": "7E5FE11A257363598048AE3857EF3D47C98F8B89"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "340"
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
