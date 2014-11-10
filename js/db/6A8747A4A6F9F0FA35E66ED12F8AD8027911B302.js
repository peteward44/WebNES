this.NesDb = this.NesDb || {};

NesDb[ '6A8747A4A6F9F0FA35E66ED12F8AD8027911B302' ] = {
	"$": {
		"name": "Adventure Island Classic",
		"class": "Licensed",
		"catalog": "NES-TB-NOE",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Germany",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "86867830",
				"sha1": "6A8747A4A6F9F0FA35E66ED12F8AD8027911B302",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-08",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-TB-0 PRG",
								"size": "32k",
								"crc": "BFD53541",
								"sha1": "3C5B9356F4695D2560BD6ED53A7629C8E8F7BF0A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-TB-0 CHR",
								"size": "32k",
								"crc": "E456E36A",
								"sha1": "E06B5CAECDB441DE7313280A13CD2DD5ACDD929C"
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
