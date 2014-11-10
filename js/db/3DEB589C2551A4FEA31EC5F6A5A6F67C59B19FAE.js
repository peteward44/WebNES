this.NesDb = this.NesDb || {};

NesDb[ '3DEB589C2551A4FEA31EC5F6A5A6F67C59B19FAE' ] = {
	"$": {
		"name": "Where in Time is Carmen Sandiego?",
		"class": "Licensed",
		"catalog": "NES-9K-USA",
		"publisher": "Konami",
		"developer": "Brøderbund",
		"region": "USA",
		"players": "1",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "917770D8",
				"sha1": "3DEB589C2551A4FEA31EC5F6A5A6F67C59B19FAE",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "カーメンサンディエゴ P",
								"size": "128k",
								"crc": "2C945F19",
								"sha1": "7DE395B32CBE407FA2C033EB973DAFA900EB1D18"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "カーメンサンディエゴ CL",
								"size": "128k",
								"crc": "D464C0BD",
								"sha1": "1671DCBB3FDAADEF59CD3DA79A8E83C62834E508"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "カーメンサンディエゴ CH",
								"size": "128k",
								"crc": "AA5FA43C",
								"sha1": "52921BF3E3D8864242A3C7D51F690013F6652EED"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "917770D8",
				"sha1": "3DEB589C2551A4FEA31EC5F6A5A6F67C59B19FAE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-9K-0 PRG",
								"size": "128k",
								"crc": "2C945F19",
								"sha1": "7DE395B32CBE407FA2C033EB973DAFA900EB1D18"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-9K-0 CHR",
								"size": "256k",
								"crc": "6FD7FBA1",
								"sha1": "437C060E5094D6892B3B3FE8E5B2CDB298277762"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
