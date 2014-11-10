this.NesDb = this.NesDb || {};

NesDb[ '1862126A3D8B8E37AC0571AA76309D0BB2DD8DB2' ] = {
	"$": {
		"name": "B-Wings",
		"altname": "Ｂ‐ワイング",
		"class": "Licensed",
		"catalog": "DFC-BW",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "2",
		"date": "1986-06-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "74F0A89F",
				"sha1": "1862126A3D8B8E37AC0571AA76309D0BB2DD8DB2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "1A",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "725D5CC4",
								"sha1": "D3F89EE488C07838D4D99E92C0EF38B5335FC174"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "456DF683",
								"sha1": "DEFA1F639D3248D6C366986D17F3F8634D25F036"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
		},
		{
			"$": {
				"system": "Famicom",
				"crc": "74F0A89F",
				"sha1": "1862126A3D8B8E37AC0571AA76309D0BB2DD8DB2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-BW-0 PRG",
								"size": "32k",
								"crc": "725D5CC4",
								"sha1": "D3F89EE488C07838D4D99E92C0EF38B5335FC174"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-BW-0 CHR",
								"size": "8k",
								"crc": "456DF683",
								"sha1": "DEFA1F639D3248D6C366986D17F3F8634D25F036"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
