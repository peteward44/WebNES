this.NesDb = this.NesDb || {};

NesDb[ 'C77EF94A6402A0C7A55C8F45367FAFA62F05A0D1' ] = {
	"$": {
		"name": "High Speed",
		"class": "Licensed",
		"catalog": "NES-8H-FRA",
		"publisher": "Tradewest",
		"developer": "Rare",
		"region": "France",
		"players": "4",
		"date": "1994-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "1C212E9D",
				"sha1": "C77EF94A6402A0C7A55C8F45367FAFA62F05A0D1",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-10-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-TQROM",
						"pcb": "NES-TQROM-01",
						"mapper": "119"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-8H-0 PRG",
								"size": "128k",
								"crc": "3E8DED4E",
								"sha1": "115FB5E1736C768E94C254FB8E3E95E6A99C4135"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8H-0 CHR",
								"size": "64k",
								"crc": "028F3D82",
								"sha1": "43C86237BF3B6C98ECEC7C39F908B7D5D56592E5"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC3B"
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
