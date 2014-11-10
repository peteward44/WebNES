this.NesDb = this.NesDb || {};

NesDb[ 'A2EB5FB422A88A1F38A9E7236164F9F251D32C24' ] = {
	"$": {
		"name": "Major League Baseball",
		"class": "Licensed",
		"catalog": "NES-BS-USA",
		"publisher": "LJN",
		"developer": "Atlus",
		"region": "USA",
		"players": "2",
		"date": "1988-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A03A422B",
				"sha1": "A2EB5FB422A88A1F38A9E7236164F9F251D32C24",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-09"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BS-0 PRG",
								"size": "32k",
								"crc": "E7FF1A3D",
								"sha1": "98CB08D506C3A03507752D667C0765EEFFEDF713"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BS-0 CHR",
								"size": "32k",
								"crc": "1FCFC7D9",
								"sha1": "8FD3746746BB3884524F4AB6EA4B021D6CEE73BB"
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
								"type": "6113"
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
