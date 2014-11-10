this.NesDb = this.NesDb || {};

NesDb[ 'FB853A77E02F1CEAE933DFF762CD0C2F6E0B2E27' ] = {
	"$": {
		"name": "Duck Hunt",
		"altname": "ダックハント",
		"class": "Licensed",
		"catalog": "HVC-DH",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1984-04-21"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "24598791",
				"sha1": "FB853A77E02F1CEAE933DFF762CD0C2F6E0B2E27",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-RROM",
						"pcb": "HVC-RROM-05",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-DH-0 PRG",
								"size": "16k",
								"crc": "90CA616D",
								"sha1": "B742576317CD6A04CAAC25252D5593844C9A0BB6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-DH-0 CHR",
								"size": "8k",
								"crc": "4E049E03",
								"sha1": "FFAD32A3BAB2FB3826BC554B1B9838E837513576"
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
