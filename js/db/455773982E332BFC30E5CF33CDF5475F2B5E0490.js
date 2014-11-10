this.NesDb = this.NesDb || {};

NesDb[ '455773982E332BFC30E5CF33CDF5475F2B5E0490' ] = {
	"$": {
		"name": "Super Mario Bros. / Duck Hunt",
		"class": "Licensed",
		"subclass": "Multi-cart",
		"catalog": "NES-MH-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "2",
		"date": "1990-06-06"
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
				"system": "NES-PAL-B",
				"crc": "91B4B1D7",
				"sha1": "455773982E332BFC30E5CF33CDF5475F2B5E0490",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-MHROM",
						"pcb": "NES-MHROM-05",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-MH-0 PRG",
								"size": "64k",
								"crc": "E8F8F7A5",
								"sha1": "63DB029E1E1FF3374C0B08B9DF198018D4472716"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-MH-0 CHR",
								"size": "16k",
								"crc": "7ECDA8B3",
								"sha1": "A32C0819D1B6A6669DFA8B1AA1490D04D4C86F0A"
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
					"cic": [
						{
							"$": {
								"type": "3195A"
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
