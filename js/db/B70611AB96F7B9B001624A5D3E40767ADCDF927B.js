this.NesDb = this.NesDb || {};

NesDb[ 'B70611AB96F7B9B001624A5D3E40767ADCDF927B' ] = {
	"$": {
		"name": "Chiller",
		"class": "Unlicensed",
		"catalog": "AGCI-CH",
		"publisher": "AGCI",
		"developer": "Exidy",
		"portdeveloper": "AGCI",
		"region": "USA",
		"players": "2",
		"date": "1990"
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
				"system": "NES-NTSC",
				"revision": "CHR-CB55",
				"crc": "C3C9D852",
				"sha1": "B70611AB96F7B9B001624A5D3E40767ADCDF927B",
				"dump": "bad",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVA",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "CHILPRG",
								"size": "32k",
								"crc": "98E3B8BB",
								"sha1": "6BD003927954FE577E9C4F38FE796D2EF5FB23E4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHILCHR",
								"size": "32k",
								"crc": "D78B8F9C",
								"sha1": "1BFCBF78372B4DD076487A6D5BEC93C94B95D495"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
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
