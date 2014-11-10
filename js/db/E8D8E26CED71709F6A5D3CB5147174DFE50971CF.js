this.NesDb = this.NesDb || {};

NesDb[ 'E8D8E26CED71709F6A5D3CB5147174DFE50971CF' ] = {
	"$": {
		"name": "Magician",
		"class": "Licensed",
		"catalog": "NES-XD-USA",
		"publisher": "Taxan",
		"developer": "Eurocom",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "B7D69A6D",
				"sha1": "E8D8E26CED71709F6A5D3CB5147174DFE50971CF",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2009-01-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "P",
								"size": "128k",
								"crc": "3829A3C2",
								"sha1": "EEB9F35D4793931B6305F8294F7A74962ACE1991"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "C",
								"size": "128k",
								"crc": "FA7529B0",
								"sha1": "15E22B393761F5320F4768B506CBC69C5B98E045"
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
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3A"
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
