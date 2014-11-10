this.NesDb = this.NesDb || {};

NesDb[ 'CE987AFB281F7D2B323AF43C3EF7BEC7DA045C63' ] = {
	"$": {
		"name": "Bandit Kings of Ancient China",
		"class": "Licensed",
		"catalog": "NES-XJ-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "5",
		"date": "1990-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "15FE6D0F",
				"sha1": "CE987AFB281F7D2B323AF43C3EF7BEC7DA045C63",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-ETROM",
						"pcb": "NES-ETROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-XJ-0 PRG",
								"size": "256k",
								"crc": "2B548D75",
								"sha1": "C0D05838234C50F18B94836F5AC89FABA11A07C4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XJ-0 CHR",
								"size": "128k",
								"crc": "26D34BF6",
								"sha1": "790A2AE9F322A53F680FEA7354BF1E5FFDE3DF7A"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
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
