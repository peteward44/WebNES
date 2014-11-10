this.NesDb = this.NesDb || {};

NesDb[ '6126F91D6C34CC35D93F190EFA641D3960026456' ] = {
	"$": {
		"name": "Solitaire",
		"class": "Unlicensed",
		"catalog": "AVE-SL",
		"publisher": "AVE",
		"developer": "Odyssey Software",
		"region": "USA",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "B6A2B981",
				"sha1": "6126F91D6C34CC35D93F190EFA641D3960026456",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-06",
						"pcb": "NINA-06",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "SOLI-PRG-R11 3ED7",
								"size": "32k",
								"crc": "1C779CD7",
								"sha1": "16920DDF01A0D994FD9DE530A2AA43CCAC1487DA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SOLI-CHR 61A6",
								"size": "32k",
								"crc": "AF78116A",
								"sha1": "D5DF94387BE414F9320D35CCAEA18362CA52B1B0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
