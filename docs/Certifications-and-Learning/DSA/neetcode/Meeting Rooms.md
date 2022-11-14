class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: if a person could attend all meetings
    """

    def canAttendMeetings(self, intervals):
        intervals.sort(key=lambda i: i.start)

        for i in range(1, len(intervals)):
            i1 = intervals[i - 1]
            i2 = intervals[i]

            if i1.end > i2.start:
                return False
        return True
        
"""
https://leetcode.com/problems/meeting-rooms/
https://youtu.be/PaJxqZVPhbg

Problem:
List of list or set. First item is start time, second item is end time.
See overlapping meetings.
If no overlapping then return true else return false.

Complexity:
O(n logn)   -- for sorting
O(n)        -- remaining part

Hence O(n logn)


Concepts:

"""

