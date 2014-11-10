this.NesDb = this.NesDb || {};

NesDb[ '6662E799365111B151B6D28D3570CD06A2CDE9D4' ] = {
	"$": {
		"name": "Bases Loaded II: Second Season",
		"class": "Licensed",
		"catalog": "NES-L2-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1990-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B9CF171F",
				"sha1": "6662E799365111B151B6D28D3570CD06A2CDE9D4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-L2-0 PRG",
								"size": "256k",
								"crc": "F2A6ACE1",
								"sha1": "77B37FBB4DFF83A2FF803E58E261849EE160C964"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-L2-0 CHR",
								"size": "128k",
								"crc": "11683DCA",
								"sha1": "D4646A114B02B08C93C8E87AC9D79758FA4E40E8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
	],
	"gameGenieCodes": [
		{
			"name": "1 strike and you're out--most of the time",
			"codes": [
				[
					"PEOGOALA"
				]
			]
		},
		{
			"name": "2 strikes and you're out--most of the time",
			"codes": [
				[
					"ZEOGOALA"
				]
			]
		},
		{
			"name": "Outs aren't counted",
			"codes": [
				[
					"SZOEVXVV"
				]
			]
		},
		{
			"name": "Only 2 outs allowed",
			"codes": [
				[
					"PAOEUZZA"
				]
			]
		},
		{
			"name": "Only 1 out allowed",
			"codes": [
				[
					"AAOEUZZA"
				]
			]
		},
		{
			"name": "Strikes aren't counted",
			"codes": [
				[
					"SXNAXOVV",
					"SXSGUKVV"
				]
			]
		},
		{
			"name": "Balls aren't counted",
			"codes": [
				[
					"SZEEXXVV",
					"SZEESXVV"
				]
			]
		}
	]
};
