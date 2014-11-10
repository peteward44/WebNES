this.NesDb = this.NesDb || {};

NesDb[ '8865F4B54B725B95A1A86E6046AEF401B5C2B6A5' ] = {
	"$": {
		"name": "Top Rider",
		"altname": "トップライダー",
		"class": "Licensed",
		"catalog": "VRE-R1",
		"publisher": "Varie",
		"developer": "Varie",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-17"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "topriderbike",
						"name": "Top Rider Bike"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "47232739",
				"sha1": "8865F4B54B725B95A1A86E6046AEF401B5C2B6A5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SFROM",
						"pcb": "HVC-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "VRE-R1-0 PRG",
								"size": "128k",
								"crc": "20D22251",
								"sha1": "283C9157BB9B842A46AA6650A12C9F48D0C6BCB3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VRE-R1-0 CHR",
								"size": "32k",
								"crc": "56C39CB2",
								"sha1": "A6B7E473230446061CE727FD914504922472283A"
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
