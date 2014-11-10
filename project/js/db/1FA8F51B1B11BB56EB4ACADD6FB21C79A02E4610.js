this.NesDb = this.NesDb || {};

NesDb[ '1FA8F51B1B11BB56EB4ACADD6FB21C79A02E4610' ] = {
	"$": {
		"name": "Dudes with Attitude",
		"class": "Unlicensed",
		"catalog": "AVE-DA",
		"publisher": "AVE",
		"developer": "Micheal Crick",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "0955B54C",
				"sha1": "1FA8F51B1B11BB56EB4ACADD6FB21C79A02E4610",
				"dump": "ok",
				"dumper": "crade",
				"datedumped": "2008-10-24"
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
								"name": "DUD-PGM D271",
								"size": "32k",
								"crc": "A4E0B257",
								"sha1": "808DD33CB37DEDFFE7219B81E6C6CB764C90C6D0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DUD-CHR 46E7",
								"size": "32k",
								"crc": "9CE10ED4",
								"sha1": "8D2439F65D139A01C3213202164F1F7B5C7BC312"
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
