package seeuthere.goodday.location.domain.algorithm;

import java.io.Serializable;
import java.util.concurrent.TimeUnit;
import javax.persistence.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.TimeToLive;
import seeuthere.goodday.location.domain.location.Point;
import seeuthere.goodday.path.dto.response.PathResponse;
import seeuthere.goodday.path.dto.response.PathsResponse;

@RedisHash("PathResult")
public class PathResult implements Serializable {

    @Id
    public String id;
    public int time;

    @TimeToLive(unit = TimeUnit.DAYS)
    private long timeToLive;

    public PathResult() {
        timeToLive = 7L;
    }

    public PathResult(String id, int time) {
        this.id = id;
        this.time = time;
        timeToLive = 7L;
    }

    public static PathResult pathsResponseToPathResult(Point source, Point target,
        PathsResponse pathsResponse) {
        PathResponse pathResponse = pathsResponse.getPaths().get(0);
        return new PathResult(source.toString() + target.toString(),
            pathResponse.getTime()
        );
    }

    public static PathResult minTimePathResult(PathResult pathResult1, PathResult pathResult2) {
        if (pathResult1.time <= pathResult2.time) {
            return pathResult1;
        }
        return pathResult2;
    }

    public String getId() {
        return id;
    }

    public int getTime() {
        return time;
    }
}
