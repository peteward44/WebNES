this.NesDb = this.NesDb || {};

NesDb[ 'A7D18986648C5B0F6A598EE0E1EB4532E8196AAD' ] = {
	"$": {
		"name": "Keiba Simulation: Honmei",
		"altname": "競馬シミュレーション本命",
		"class": "Licensed",
		"catalog": "NBF-KH (08)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "1",
		"date": "1989-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "93A7D26C",
				"sha1": "A7D18986648C5B0F6A598EE0E1EB4532E8196AAD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-KH-0 PRG",
								"size": "128k",
								"crc": "A9065101",
								"sha1": "3DB40B38FC78C0A3F327ED733BE8B2BC805E9FF9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-KH-0 CHR",
								"size": "128k",
								"crc": "A7BF4BF0",
								"sha1": "376514A5072DD543BE00B36A92F73F1F0649E2F2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
