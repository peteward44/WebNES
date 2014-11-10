this.NesDb = this.NesDb || {};

NesDb[ 'C75797A2A9FCA6CAC82DDB2EB0966B572F65DEA1' ] = {
	"$": {
		"name": "WWF King of the Ring",
		"class": "Licensed",
		"catalog": "NES-K6-NOE",
		"publisher": "LJN",
		"developer": "Eastridge Technology",
		"region": "Germany",
		"players": "2",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "071D4C2D",
				"sha1": "C75797A2A9FCA6CAC82DDB2EB0966B572F65DEA1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-14"
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
								"name": "PAL-K6-0 PRG",
								"size": "128k",
								"crc": "D11C5D60",
								"sha1": "EAF5A20B6F6D2C84A889BBF2FF857DD5ECE35BB0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-K6-0 CHR",
								"size": "256k",
								"crc": "C9E43815",
								"sha1": "0328415D8556D7733AD926FB17E9248AEF5EE3F5"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
