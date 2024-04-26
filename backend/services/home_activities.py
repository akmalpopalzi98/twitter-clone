from datetime import datetime, timedelta, timezone


class HomeActivities:
    def run():
        now = datetime.now(timezone.utc).astimezone()
        results = [
            {
                'uuid':"68f126b0-1ceb-4a33-88be-d90fa7109eee",
                'name':"Akmal Popalzi",
                'handle':"@akmal98",
                'message':"This is fun!!",
                'created_at': (now - timedelta(days=2)).strftime("%Y-%m-%d %H:%M:%S"),
                'expires_at':(now + timedelta(days=5)).strftime("%Y-%m-%d %H:%M:%S"),
                'likes_count':5,
                'replies_count':10,
                'repose_count':0,
                'replies': [{
                        'uuid': '26e12864-1c26-5c3a-9658-97a10f8fea67',
                        'reply_to_activity_uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
                        'handle':  '@Worf',
                        'message': 'This post has no honor!',
                        'likes_count': 0,
                        'replies_count': 0,
                        'reposts_count': 0,
                        'created_at': (now - timedelta(days=2)).strftime("%Y-%m-%d %H:%M:%S")}],
            },    {
                'uuid': '66e12864-8c26-4c3a-9658-95a10f8fea67',
                'name':'Worf',
                'handle':  '@Worf',
                'message': 'I am out of prune juice',
                'created_at': (now - timedelta(days=7)).strftime("%Y-%m-%d %H:%M:%S"),
                'expires_at': (now + timedelta(days=9)).strftime("%Y-%m-%d %H:%M:%S"),
                'likes': 0,
                'replies': []
    },
        ]
        return results
    