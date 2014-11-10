this.NesDb = this.NesDb || {};

NesDb[ 'DBA512B9EEE01549D3939297FD463681CFF92F11' ] = {
	"$": {
		"name": "Touchdown Fever",
		"class": "Licensed",
		"catalog": "NES-T7-USA",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "USA",
		"players": "2",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EA4EB69E",
				"sha1": "DBA512B9EEE01549D3939297FD463681CFF92F11",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-T7-0 PRG",
								"size": "128k",
								"crc": "6E6490CD",
								"sha1": "2723722587D3806A3B2A8ED2D39BD9EC72F77257"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-T7-0 CHR",
								"size": "32k",
								"crc": "253AA3DA",
								"sha1": "4979B38E8EE94D7F3CA5FE8C3915B56976A5AA0E"
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
	]
};
