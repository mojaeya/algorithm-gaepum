import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> pMap = new HashMap<>();
        for (String key : participant) {
            if (pMap.containsKey(key)) {
                int curr = pMap.get(key);
                pMap.put(key, curr + 1);
            } else {
                pMap.put(key, 1);
            }
        }

        HashMap<String, Integer> cMap = new HashMap<>();
        for (String key : completion) {
            if (cMap.containsKey(key)) {
                int curr = cMap.get(key);
                cMap.put(key, curr + 1);
            } else {
                cMap.put(key, 1);
            }
        }

        for (String key : pMap.keySet()) {
            int value = pMap.get(key);
            if (!cMap.containsKey(key) || value != cMap.get(key)) {
                return key;
            }
        }

        return "";
    }
}

// public class Test {
//     public static void main(String[] args) {
//         Solution s = new Solution();
//         String[] participants = {"mislav", "stanko", "mislav", "ana"};
//         String[] completions = {"stanko", "ana", "mislav"};
//         String result = s.solution(participants, completions);
//         System.out.println(result);
//     }
// }
