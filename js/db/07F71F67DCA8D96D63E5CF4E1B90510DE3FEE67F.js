this.NesDb = this.NesDb || {};

NesDb[ '07F71F67DCA8D96D63E5CF4E1B90510DE3FEE67F' ] = {
	"$": {
		"name": "World Class Track Meet",
		"class": "Licensed",
		"catalog": "NES-WT-USA",
		"publisher": "Nintendo",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "2",
		"date": "1988-08"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "AF4010EA",
				"sha1": "07F71F67DCA8D96D63E5CF4E1B90510DE3FEE67F",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WT-1 PRG",
								"size": "32k",
								"crc": "2D76A271",
								"sha1": "3655177213D0E24DBF5A676D3CF21D884B342169"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WT-0 CHR",
								"size": "32k",
								"crc": "6AB36671",
								"sha1": "D05E9BF4CB9494D995B4BF683575D6B1EC1CBB91"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
