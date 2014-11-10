this.NesDb = this.NesDb || {};

NesDb[ 'D477C50188CB0051FE02CB057DB1B6A33DE59E01' ] = {
	"$": {
		"name": "Widget",
		"class": "Licensed",
		"catalog": "NES-W7-USA",
		"publisher": "Atlus",
		"developer": "Graphic Research",
		"region": "USA",
		"players": "1",
		"date": "1992-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E7C981A2",
				"sha1": "D477C50188CB0051FE02CB057DB1B6A33DE59E01",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
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
								"name": "NES-W7-0 PRG",
								"size": "128k",
								"crc": "FA839DC9",
								"sha1": "83C139A5403D84A6D5AD9267A64BA08DCDEE9FA9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-W7-0 CHR",
								"size": "128k",
								"crc": "D45652C0",
								"sha1": "78993D66F15B095282D6A86ECF161223502C6E8C"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
