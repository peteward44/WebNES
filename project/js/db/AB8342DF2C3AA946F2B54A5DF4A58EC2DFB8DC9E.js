this.NesDb = this.NesDb || {};

NesDb[ 'AB8342DF2C3AA946F2B54A5DF4A58EC2DFB8DC9E' ] = {
	"$": {
		"name": "Blackjack",
		"class": "Unlicensed",
		"catalog": "AVE-BJ",
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
				"crc": "C2A4612E",
				"sha1": "AB8342DF2C3AA946F2B54A5DF4A58EC2DFB8DC9E",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-05-05"
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
								"name": "BJAK 1005 PRG 6F43",
								"size": "32k",
								"crc": "33CD1506",
								"sha1": "045F4A47D00533ECE07081D3F12B50BB830E5207"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BJAK 0821 CHR 673B",
								"size": "32k",
								"crc": "90772101",
								"sha1": "ED4D9B05EBCFBB6997411049133635BDADD8E0D3"
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
