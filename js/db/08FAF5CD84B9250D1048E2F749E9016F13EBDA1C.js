this.NesDb = this.NesDb || {};

NesDb[ '08FAF5CD84B9250D1048E2F749E9016F13EBDA1C' ] = {
	"$": {
		"name": "Hammerin' Harry",
		"class": "Licensed",
		"catalog": "NES-59-FRG",
		"publisher": "Irem",
		"developer": "Irem",
		"region": "Germany",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "67CBC0A0",
				"sha1": "08FAF5CD84B9250D1048E2F749E9016F13EBDA1C",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-23"
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
								"name": "PAL-59-0 PRG",
								"size": "128k",
								"crc": "065FF04F",
								"sha1": "A0C4E60BCBAFD4E04CAF727BF5FFBEE0F09402BF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-59-0 CHR",
								"size": "128k",
								"crc": "922D2B82",
								"sha1": "71671A6525D29A2E0D249D588E4728CCF2E5BC13"
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
