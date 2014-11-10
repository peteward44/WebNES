this.NesDb = this.NesDb || {};

NesDb[ '4CB9688319334367F8BE4FEC40A52D299D953D0D' ] = {
	"$": {
		"name": "Ikinari Musician",
		"altname": "いきなりミュージシャン",
		"class": "Licensed",
		"catalog": "TKS-G1",
		"publisher": "Tokyo Shoseki",
		"developer": "Musical Plan",
		"region": "Japan",
		"players": "1",
		"date": "1987-03-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "092EC15C",
				"sha1": "4CB9688319334367F8BE4FEC40A52D299D953D0D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-G1-0 PRG",
								"size": "32k",
								"crc": "8AA7CCE1",
								"sha1": "176B4640F9A85F8B9B2E81F7C8DE82F1526D18DE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-G1-0 CHR",
								"size": "16k",
								"crc": "C20BEFC5",
								"sha1": "3365167125A98179B48D3AEBAB826DE9F6DC92F3"
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
