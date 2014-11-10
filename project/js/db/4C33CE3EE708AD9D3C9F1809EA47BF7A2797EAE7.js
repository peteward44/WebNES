this.NesDb = this.NesDb || {};

NesDb[ '4C33CE3EE708AD9D3C9F1809EA47BF7A2797EAE7' ] = {
	"$": {
		"name": "Turbo Racing",
		"class": "Licensed",
		"catalog": "NES-44-FRG",
		"publisher": "Data East",
		"developer": "Sakata SAS",
		"region": "Germany",
		"players": "4",
		"date": "1992-07-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4D1DF589",
				"sha1": "4C33CE3EE708AD9D3C9F1809EA47BF7A2797EAE7",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-44-0 PRG",
								"size": "128k",
								"crc": "75B9C0DB",
								"sha1": "4775DC7A1B5AB448389B06CF1D99EA15B3247D88"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-44-0 CHR",
								"size": "128k",
								"crc": "C2AA50AF",
								"sha1": "91818B13A2809BE5F572FBD88CD71B3DB639EDD0"
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
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
