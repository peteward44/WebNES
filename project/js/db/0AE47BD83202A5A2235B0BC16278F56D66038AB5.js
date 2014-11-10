this.NesDb = this.NesDb || {};

NesDb[ '0AE47BD83202A5A2235B0BC16278F56D66038AB5' ] = {
	"$": {
		"name": "Deathbots",
		"class": "Unlicensed",
		"catalog": "AVE-DB",
		"publisher": "AVE",
		"developer": "Odyssey Software",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "8EAB381C",
				"sha1": "0AE47BD83202A5A2235B0BC16278F56D66038AB5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-22"
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
								"name": "DEATHBOTS PGM 239F",
								"size": "64k",
								"crc": "B3E2F2EF",
								"sha1": "A9CCFF26A57F92D3FA4EA3E5BFC31F25FFDCD43E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DEATHBOTS CHR 81C0",
								"size": "64k",
								"crc": "391C465A",
								"sha1": "1CE4A5A905787A7B9916E3FA5F433DAFDBD6B048"
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
