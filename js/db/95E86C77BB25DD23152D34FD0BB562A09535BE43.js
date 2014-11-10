this.NesDb = this.NesDb || {};

NesDb[ '95E86C77BB25DD23152D34FD0BB562A09535BE43' ] = {
	"$": {
		"name": "Pyramid",
		"class": "Unlicensed",
		"catalog": "AVE-PY",
		"publisher": "AVE",
		"developer": "Sachen / Joy Van",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "2472C3EB",
				"sha1": "95E86C77BB25DD23152D34FD0BB562A09535BE43",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-26"
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
								"name": "PYR-PRG B11E",
								"size": "16k",
								"crc": "BE86EE6D",
								"sha1": "0C164A7B99028C17032E8021F3A9B5A590DB7547"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PYRAMID CHR-256 7408-256K",
								"size": "8k",
								"crc": "8EEF716A",
								"sha1": "3BB075D183253C1C882AD9A788401BD03EA9B69A"
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
