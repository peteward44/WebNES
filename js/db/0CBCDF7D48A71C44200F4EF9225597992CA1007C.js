this.NesDb = this.NesDb || {};

NesDb[ '0CBCDF7D48A71C44200F4EF9225597992CA1007C' ] = {
	"$": {
		"name": "Golf Club Birdie Rush",
		"altname": "ゴルフ倶楽部バーディラッシユ",
		"class": "Licensed",
		"catalog": "DFC-GH",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "2",
		"date": "1987-12-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FCB13110",
				"sha1": "0CBCDF7D48A71C44200F4EF9225597992CA1007C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-GH-0 PRG",
								"size": "128k",
								"crc": "07AF9301",
								"sha1": "89922FD9467851EFCDF04B535419FADB15D707C0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-GH-0 CHR",
								"size": "128k",
								"crc": "ADF430B3",
								"sha1": "1D961F3336A95781D8E86455B05E59A58C40015E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
