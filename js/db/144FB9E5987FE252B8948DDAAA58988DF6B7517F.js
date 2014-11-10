this.NesDb = this.NesDb || {};

NesDb[ '144FB9E5987FE252B8948DDAAA58988DF6B7517F' ] = {
	"$": {
		"name": "Galactic Crusader",
		"class": "Unlicensed",
		"catalog": "TC-009",
		"publisher": "Sachen / Joy Van",
		"developer": "Sachen / Joy Van",
		"region": "Taiwan",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3F2450EA",
				"sha1": "144FB9E5987FE252B8948DDAAA58988DF6B7517F",
				"dump": "ok",
				"dumper": "crade",
				"datedumped": "2008-11-29"
			},
			"board": [
				{
					"$": {
						"type": "UNL-SA-016-1M",
						"pcb": "SA002-72P-1D",
						"mapper": "146"
					},
					"prg": [
						{
							"$": {
								"name": "D772550 PGM@21V 8535KD107",
								"size": "32k",
								"crc": "BCA0FF02",
								"sha1": "4ED14F857A0C30E412C3706EEF94E0EFCF0B2108"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "B8806 NMC27C256Q 250",
								"size": "32k",
								"crc": "975A9BF6",
								"sha1": "96023B7A16B9460FBF1D21D29A82B80F17C92FD8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
