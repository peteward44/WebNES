this.NesDb = this.NesDb || {};

NesDb[ 'AC70354B91596E7B20EDE132C9B1ACDB5C7D24B9' ] = {
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
				"revision": "A",
				"crc": "96E6C1CE",
				"sha1": "AC70354B91596E7B20EDE132C9B1ACDB5C7D24B9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
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
								"name": "NES-BS-1 PRG",
								"size": "32k",
								"crc": "754522C3",
								"sha1": "F491E4ED53932DC210343CA2C238E478DABEFE40"
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
								"type": "6113A"
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
