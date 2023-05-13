import java.util.*;

class Solution {
    public String solution(String new_id) {
        //소문자변환 + 특수문자허용범위설정+ [.] 처리 
        new_id = new_id.toLowerCase().replaceAll("[^a-z0-9._-]", "").replaceAll("\\.{2,}", ".").replaceAll("^[.]|[.]$", "");

        //빈문자열일시 a 
        if (new_id.length() == 0) {
            new_id = "a";
        }

        //너무 길면 이렇게처리 
        if (new_id.length() >= 16) {
            new_id = new_id.substring(0, 15);
            new_id = new_id.replaceAll("[.]$", "");
        }

        //너무 짧으면 3글자로 맞춰주기
        while (new_id.length() <= 2) {
            new_id += new_id.charAt(new_id.length() - 1);
        }

        return new_id;
    }
}