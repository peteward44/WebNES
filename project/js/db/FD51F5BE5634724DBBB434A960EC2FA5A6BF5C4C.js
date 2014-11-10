this.NesDb = this.NesDb || {};

NesDb[ 'FD51F5BE5634724DBBB434A960EC2FA5A6BF5C4C' ] = {
	"$": {
		"name": "Mario's Time Machine",
		"class": "Licensed",
		"catalog": "NES-TM-USA",
		"publisher": "The Software Toolworks",
		"developer": "Radical Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1994-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "55DB7E2A",
				"sha1": "FD51F5BE5634724DBBB434A960EC2FA5A6BF5C4C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
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
								"name": "NES-TM-0 PRG",
								"size": "128k",
								"crc": "2E35DD2E",
								"sha1": "33B11F747BBCBA25DCD21A34EF77B32C6F4EA06A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-TM-0 CHR",
								"size": "128k",
								"crc": "0DC8163B",
								"sha1": "5E2DD0BFB2713BD4C76E198C427CCBA944FCDF70"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
