this.NesDb = this.NesDb || {};

NesDb[ '19EEA64CB2922D4E30797CF34C75597EE86F2538' ] = {
	"$": {
		"name": "Gargoyle's Quest II",
		"class": "Licensed",
		"catalog": "NES-G2-SCN",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-06-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "86C495C6",
				"sha1": "19EEA64CB2922D4E30797CF34C75597EE86F2538",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-G2-0 PRG",
								"size": "128k",
								"crc": "09E4C3E0",
								"sha1": "A2DC4D379834DD6382932AD4100E9051E7065221"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-G2-0 CHR",
								"size": "128k",
								"crc": "249C887C",
								"sha1": "51598786A26C9C3F746628218E7B74737F6BC097"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
