<?php 
$device = $_GET['device'];
$id = $_GET['id'];
$seckey = $_GET['seckey'];
$key = $_GET['key'];
$RaidStart = date("H:i:s");  


if ($seckey == raidnotice11111241415) {
	if (isset($device)) {
		if ($device == 0) {
			$vkuserslash = preg_replace('/.*?vk.com/','',$id);
			$vkuser = str_replace("/","",$vkuserslash);
			$access_token = '4b41364e93599d80e795e7e923b5911d6f1db7eb5e9432ef26270b317d8b48facafc8492a7943bb7c7322';
			if ($key == '1') 
			{
				$message = 'Похоже+вас+пытаются+зарейдить+на+сервере+RockStone.+Начало+рейда+в+'.$RaidStart.'+МСК.';
			}	
			else 
			{
				$message = 'Код+подтверждения+'.$key.'.+Введите+в+игре+/rn+accept+'.$key;
			}	
			$sRequestURI = 'https://api.vk.com/method/messages.send?domain='.$vkuser.'&message='.$message.'&v=5.57&access_token='.$access_token;
			$result = file_get_contents($sRequestURI);
			
			echo $result;
			if(stristr($result, 'error_code') === FALSE) {
				echo 'Good';
			} 
			else 
			{
				if(stristr($result, '902') === FALSE) 
				{
					if(stristr($result, '900') === FALSE) 
					{
						if(stristr($result, '100') === FALSE) 
						{
							echo 'BlackList';
						} 
						else
						{
							echo 'ErrorSend';
						}	
					} 
					else
					{
						echo 'Bad';
					}	
				} 
				else 
				{
					echo 'PrivateMessage';
				}
			}
		}
		else 
		{
			if (isset($id)) {
				if ($key != '1') 
				{
					$body=file_get_contents("http://sms.ru/sms/send?api_id=EF25385A-B0C5-2118-91AA-F26787911D1F&to=".$id."&text=".urlencode("Код подтверждения ".$key.". Введите в игре /rn accept ".$key.""));
					if(stristr($body, '100') === FALSE) {
						if(stristr($body, '201') === FALSE) 
						{
							echo 'BadPhone';
						}
						else
						{
							echo 'BadBalance';
						}	
					} 
					else 
					{
						echo 'Good';
					}	
				}
				else
				{
					$body=file_get_contents("http://sms.ru/sms/send?api_id=EF25385A-B0C5-2118-91AA-F26787911D1F&to=".$id."&text=".urlencode("Похоже вас пытаются зарейдить на сервере RockStone."));
					if(stristr($body, '100') === FALSE) {
						if(stristr($body, '201') === FALSE) 
						{
							echo 'BadPhone';
						}
						else
						{
							echo 'BadBalance';
						}	
					} 
					else 
					{
						echo 'Good';
					}
				}
			}
		}
	}	
	else
	{
		echo 'DeviceNull';
	}	
	
	
}
else 
{
	echo 'BadKey';
}

?>


