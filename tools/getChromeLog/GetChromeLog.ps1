
# 'C:\Users\pete.ward\AppData\Local\'
$chrome_log = [Environment]::GetFolderPath("LocalApplicationData") + '\Google\Chrome\User Data\chrome_debug.log'
$stream = [System.IO.StreamWriter] "chome_console_log.txt"

get-content $chrome_log | Foreach-Object {

	if ( $_ -match '(\[\d+\:\d+\:\d+/\d+\:INFO\:CONSOLE\(\d+\)\] \")(.*$)' )
	{
		$str = $matches[2];
		$str = $str -replace '(\"\, source\:.*$)', ''
		$stream.WriteLine($str)
	}
}

$stream.close()

Remove-Item $chrome_log
